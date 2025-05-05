import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ReportPage() {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [status, setStatus] = useState<
    "idle" | "uploading" | "submitted" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("uploading");

    const user = (await supabase.auth.getUser()).data.user;
    const { data: userData } = await supabase.auth.getUser();
    const user_id = userData?.user?.id;
    if (!user) {
      alert("Тіркеліңіз немесе кіріңіз.");
      setStatus("idle");
      return;
    }

    // Upload image
    let imageUrl = "";
    if (!image) {
      alert("No image selected!");
      return;
    }
    if (image) {
      const fileExt = image.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `private/${fileName}`;
      const { data, error } = await supabase.storage
        .from("issues")
        .upload(filePath, image, {
          contentType: "image/png",
          upsert: true,
        });

      if (error) {
        console.error("Image upload error:", error.message);
        setStatus("error");
        return;
      }

      const { data: publicUrl } = supabase.storage
        .from("issues")
        .getPublicUrl(fileName);
      imageUrl = publicUrl.publicUrl;
    }

    // Insert into DB
    const { error: insertError } = await supabase.from("issues").insert([
      {
        user_id: user_id,
        description,
        location,
        image_url: imageUrl,
        status: "processing",
      },
    ]);

    if (insertError) {
      console.error("DB error:", insertError.message);
      setStatus("error");
    } else {
      setStatus("submitted");
      setDescription("");
      setLocation("");
      setImage(null);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Мәселені тіркеу</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Мәселені сипаттаңыз"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Орналасқан жері (мысалы: Алматы, Абай көшесі 42)"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full"
        />
        <button
          type="submit"
          disabled={status === "uploading"}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          {status === "uploading" ? "Жүктелуде..." : "Шағым жіберу"}
        </button>
        {status === "submitted" && (
          <p className="text-green-600 font-medium text-center">
            Мәселе тіркелді ✅
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 font-medium text-center">Қате болды 😢</p>
        )}
      </form>
    </div>
  );
}
