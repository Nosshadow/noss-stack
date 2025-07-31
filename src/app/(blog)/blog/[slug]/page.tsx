type Props = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: Props) {
  return (
    <div>
      <h1>Entrada del Blog: {params.slug}</h1>
      <p>Contenido del artículo...</p>
    </div>
  );
}
