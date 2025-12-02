import InteractiveGallery from "@/components/InteractiveGallery";

export default function GalleryPage() {
  return (
    <div className="container py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Interactive Gallery</h1>
        <p className="text-secondary max-w-2xl mx-auto">
          Explore my projects and experience in an interactive grid. Click on any card to view more details.
        </p>
      </div>

      <InteractiveGallery />
    </div>
  );
}
