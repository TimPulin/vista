type TitlePagePropsType = {
  title: string;
};

export default function PageTitle(props: TitlePagePropsType) {
  return (
    <h1 className="content__title">
      {props.title}
    </h1>
  );
}
