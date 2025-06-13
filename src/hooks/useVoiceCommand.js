import { useEffect } from "react";

const useVoiceCommand = (onCommandRecognized) => {
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("Speech recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript
        .toLowerCase()
        .trim();

      console.log("Voice command:", transcript);
      if (
        transcript.includes("screenshot") ||
        transcript.includes("take shot")
      ) {
        onCommandRecognized();
      }
    };

    recognition.onerror = (err) => console.error("Speech error:", err);

    recognition.start();

    return () => recognition.stop();
  }, [onCommandRecognized]);
};

export default useVoiceCommand;
