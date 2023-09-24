type TitlePagePropsType = {
  title: string;
};

export default function TitlePage(props: TitlePagePropsType) {
  return (
    <h1 className="content__title">
      {props.title}
    </h1>
  );
}
