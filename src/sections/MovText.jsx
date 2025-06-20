const MovText = ({ postion }) => {
  return (
    <div
      className={`relative ${
        postion === "top" ? "mt-20" : "mb-20"
      } py-2 bg-white text-black overflow-hidden `}
    >
      <div className="logo-div overflow-hidden">
        <div className="logo-slide inline-block">
          <p className="text-xl font-medium">
            We don’t follow trends — we set them ● Your favorite agency’s
            favorite agency ● We make websites that make others jealous ●{" "}
            Pixel-perfect? Please ● We do better than perfect ● Mediocre isn’t
            in our vocabulary ● Fast, sleek, untouchable — just like us ● We
            don’t pitch ideas — we drop standards ● If your site doesn’t turn
            heads, we didn’t build it ● We design like it's a superpower —
            because it is ● Others build websites ● We build dominance ●{" "}
          </p>
        </div>
        <div className="logo-slide inline-block">
          <p className="text-xl font-medium">
            {" "}
            We don’t follow trends — we set them ● Your favorite agency’s
            favorite agency ● We make websites that make others jealous ●{" "}
            Pixel-perfect? Please ● We do better than perfect ● Mediocre isn’t
            in our vocabulary ● Fast, sleek, untouchable — just like us ● We
            don’t pitch ideas — we drop standards ● If your site doesn’t turn
            heads, we didn’t build it ● We design like it's a superpower —
            because it is ● Others build websites ● We build dominance ●{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovText;
