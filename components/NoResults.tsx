interface IProps {
  text: string;
}

export const NoResults = ({ text }: IProps) => {
  return <div>{text}</div>;
};
