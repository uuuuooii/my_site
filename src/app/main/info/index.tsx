import Link from "next/link";

const Info = () => {
  return (
    <div className="absolute sm:top-[35%] top-[5%] left-[5%] grid w-[300px] ">
      <p>EunHye Kim</p>
      <p>Web Frontend Software Engineer</p>
      <p>Github:
        <Link href={"https://github.com/uuuuooii"} target="_blank">github.com/uuuuooii</Link>
      </p>
      <p>Linkedin:
        <Link href={"https://www.linkedin.com/in/uuuuooii/"} target="_blank">linkedin.com/in/uuuuooii</Link>
      </p>
      <p>Email: eunhey2717@naver.com</p>
    </div >
  );
};

export default Info;