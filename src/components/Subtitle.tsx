interface Subtitle {
  subtitle: string;
}

export default function Subtitle({ subtitle }: Subtitle) {
  return(
    <h2>{ subtitle }</h2>
  );
}