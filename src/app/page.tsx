import Image from "next/image";

export default function Home() {
  return (
    <main style={{ padding: '20px' }}>
      <div style={{
        display: 'grid', width: '300px'
      }}>
        <p>EunHye Kim</p>
        <p>Web Frontend Software Engineer</p>
        <p>Github: github.com/uuuuooii</p>
        <p>Linkedin: linkedin.com/in/uuuuooii</p>
        <p>Email: eunhey2717@naver.com</p>
      </div>
      <div>
        <Image src={'/images/women.png'} width={800} height={600} alt="women" className="z-10 absolute bottom-[-8%] left-1/2 transform -translate-x-1/2 max-w-[800px] w-full" />
      </div>
      <div>
        <p
          style={{ fontSize: 'clamp(220px, 18vw, 500px)' }}
          className="position absolute bottom-[-13%] w-full flex items-center justify-center text-400px font-bebas font-black scale-y-200">EUNHYE</p>
      </div>
    </main>
  );
}
