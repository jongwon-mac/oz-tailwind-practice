export default function Header() {
  return (
    <header className="flex justify-between items-center p-2.5 px-5 bg-black">
      <h2 className="text-white">OZ코딩스쿨</h2>
      <ul className="flex justify-center items-center gap-5 list-none text-[13px] font-normal text-white">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </header>
  );
}