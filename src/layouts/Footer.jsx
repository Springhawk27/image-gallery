const Footer = () => {
  return (
    <footer className="footer footer-center p-8 bg-red-100 text-base-content rounded flex justify-between">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover ">
          <span className="text-purple-600">Image</span>{" "}
          <span className="text-yellow-500">~Gallery</span>
        </a>
      </div>

      <div>
        <p>Copyright © 2023 - All right reserved by Sajjad Mahmud</p>
      </div>
    </footer>
  );
};

export default Footer;
