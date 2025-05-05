// src/pages/TrackIssuesPage.tsx
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

type Issue = {
  id: string;
  image_url: string;
  location: string;
  description: string;
  status: string;
  created_at: string;
};

export default function TrackIssuesPage() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchIssues = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('issues')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching issues:', error.message);
    } else {
      setIssues(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">📝 Менің шағымдарым</h2>

      {loading ? (
        <p>Жүктелуде...</p>
      ) : issues.length === 0 ? (
        <p>Сізде әзірше шағымдар жоқ.</p>
      ) : (
        <div className="grid gap-4">
          {issues.map((issue) => (
            <div key={issue.id} className="bg-white p-4 rounded-xl shadow border">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <img
                  src={issue.image_url}
                  alt="Issue"
                  className="w-full md:w-40 h-40 object-cover rounded-md"
                />
                <div className="flex-1">
                  <p className="text-gray-500 text-sm mb-1">
                    📍 {issue.location}
                  </p>
                  <p className="font-semibold">{issue.description}</p>
                  <p className="text-sm mt-2 text-gray-600">
                    🗓️ {new Date(issue.created_at).toLocaleString('kk-KZ')}
                  </p>
                </div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    issue.status === 'Solved'
                      ? 'bg-green-100 text-green-700'
                      : issue.status === 'Processing'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {issue.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
