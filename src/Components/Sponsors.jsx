export default function Sponsors({ only_icons }) {
  var imgs = [
    {
      image: "/sp1.png",
      url: "https://www.howest.be/",
    },
    {
      image: "/sp3.png",
      url: "https://www.contrastsecurity.com/en-gb/",
    },
    {
      image: "/sp4.png",
      url: "https://www.microfocus.com/",
    },
    {
      image: "/sp6.png",
      url: "https://www.softwareimprovementgroup.com/",
    },
    {
      image: "/sp7.png",
      url: "https://www.vest.nl/",
    },
    {
      image: "/sp8.png",
      url: "https://davinsi.com/",
    },
    {
      image: "/sp9.png",
      url: "https://www.securify.nl/",
    },
    {
      image: "/sp2.png",
      url: "https://www.toreon.com/",
    },
    {
      image: "/sp5.png",
      url: "https://www.secura.com/",
    },
  ];

  return (
    <div className="sponsors" style={only_icons && { paddingTop: 0 }}>
      {!only_icons && <div className="head">OUR SPONSORS</div>}
      <div className="images">
        {imgs.map((x, i) => {
          return ( <div
              key={i}
              className="img"
              style={{ backgroundImage: `url(${x.image})` }}
              onClick={()=>window.open(x.url)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
