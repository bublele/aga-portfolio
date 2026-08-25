type SocialMarksProps = {
  inverse?: boolean;
};

export function SocialMarks({ inverse = false }: SocialMarksProps) {
  return (
    <div
      aria-hidden="true"
      className={inverse ? "social-marks social-marks--inverse" : "social-marks"}
    >
      <span className="social-mark">in</span>
      <span className="social-mark">f</span>
      <span className="social-mark">◎</span>
    </div>
  );
}
