import html2canvas from "html2canvas-pro";

const useScreenshot = () => {
  const takeScreenshot = async () => {
    try {
      const target = document.getElementById("screenshot-area");
      if (!target) {
        console.warn("Screenshot target not found.");
        return;
      }

      const canvas = await html2canvas(target, {
        useCORS: true,
      });

      const dataUrl = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `screenshot-${Date.now()}.png`;
      link.click();
    } catch (error) {
      console.error("Screenshot failed", error);
    }
  };

  return { takeScreenshot };
};

export default useScreenshot;

/*import html2canvas from "html2canvas";

const useScreenshot = () => {
  const takeScreenshot = async (elementId = "screenshot-area") => {
    const element = document.getElementById(elementId);

    if (!element) {
      alert("❌ Screenshot area not found!");
      return;
    }

    try {
      const canvas = await html2canvas(element, {
        useCORS: true,
        scale: 2, // better quality
        backgroundColor: "#ffffff", // force white background
      });

      const image = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = image;
      link.download = "screenshot.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Screenshot failed", err);
      alert("Screenshot failed. See console for details.");
    }
  };

  return { takeScreenshot };
};

export default useScreenshot;*/
