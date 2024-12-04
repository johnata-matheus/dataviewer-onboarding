interface Text {
  text: string;
  html?: boolean
}

export default function Text({ text, html = false }: Text) {
  return html ? (
    <p dangerouslySetInnerHTML={{ __html: text }} />
  ) : (
    <p>{text}</p>
  );
}