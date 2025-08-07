import QRCodeGenerators from "react-qr-code";
const QRCode = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <div
        style={{
          height: "auto",
          // margin: "0 auto",
          maxWidth: 300,
          width: "100%",
        }}
      >
        <QRCodeGenerators
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value="https://www.seaicetech.com/"
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
};

export default QRCode;
