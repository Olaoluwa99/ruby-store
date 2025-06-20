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
