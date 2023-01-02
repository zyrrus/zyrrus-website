import warningImage from "assets/missing-file.svg";

type Props = {
  images: string[];
};

export default function ImageCarousel({ images }: Props) {
  return <img src={warningImage} alt="preview" />;
}
