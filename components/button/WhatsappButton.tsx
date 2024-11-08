const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/yourwhatsappnumber"
      className="z-10 fixed bottom-5 right-5 bg-green-500 text-white rounded-full p-3 shadow-lg transition-transform ease-in-out transform hover:scale-125"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="flex gap-2.5 items-center">
        <img
          src="images/whatsapp.svg"
          alt="WhatsApp"
          className="w-5 h-5  "
          color="white"
        />
      </span>
    </a>
  );
};

export default WhatsAppButton;
