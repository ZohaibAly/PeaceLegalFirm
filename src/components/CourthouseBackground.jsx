import CourtBg from '../assets/images/ContactFormBg.png';
export default function CourthouseBackground() {
  return (
    <div className="w-full h-[500px]">
      <img 
        src={CourtBg}
        alt="Courthouse"
        className="w-full h-full object-cover"
      />
    </div>
  );
}