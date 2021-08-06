function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800 cursor-pointer">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsrooms</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 cursor-pointer">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Diversity & Belonging</p>
        <p>Accessibility</p>
        <p>Airbnb Associates</p>
        <p>Frontline Stays</p>
        <p>Guest Referrals</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 cursor-pointer">
        <h5 className="font-bold">HOST</h5>
        <p>Host your home</p>
        <p>Host an Online Experience</p>
        <p>Host an Experience</p>
        <p>Responsible hosting</p>
        <p>Resource Centre</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 cursor-pointer">
        <h5 className="font-bold">Support</h5>
        <p>Our COVID-19 Response</p>
        <p>Help Centre</p>
        <p>Made with ♥</p>
        <p>Harsh Malviya</p>
        <p>Github</p>
      </div>
    </div>
  );
}

export default Footer;
