// src/pages/Admin.tsx
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

type Report = {
  id: number;
  title: string;
  description: string;
  status: string;
  image_url: string;
  created_at: string;
};

export default function AdminPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      const { data, error } = await supabase
        .from('issues')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching reports:', error.message);
      } else {
        setReports(data || []);
      }

      setLoading(false);
    };

    fetchReports();
  }, []);

  const handleStatusChange = async (id: number, newStatus: string) => {
    const { error } = await supabase
      .from('reports')
      .update({ status: newStatus })
      .eq('id', id);

    if (error) {
      alert('Failed to update status');
    } else {
      setReports((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
      );
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {loading ? (
        <p>Loading reports...</p>
      ) : reports.length === 0 ? (
        <p>No reports found.</p>
      ) : (
        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="border p-4 rounded-lg shadow bg-white"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{report.title}</h2>
                <select
                  value={report.status}
                  onChange={(e) =>
                    handleStatusChange(report.id, e.target.value)
                  }
                  className="border rounded px-2 py-1"
                >
                  <option value="Processing">Processing</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Solved">Solved</option>
                </select>
              </div>
              <p className="text-gray-600 mb-2">{report.description}</p>
              {report.image_url && (
                <img
                  src={report.image_url}
                  alt="Report"
                  className="w-full h-auto max-w-md rounded"
                />
              )}
              <p className="text-sm text-gray-400 mt-2">
                Created at: {new Date(report.created_at).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
