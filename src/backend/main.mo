


actor {
  public type ContactInfo = {
    email : Text;
    phone : Text;
    name : Text;
    address : Text;
  };

  public type Inquiry = {
    name : Text;
    email : Text;
    message : Text;
  };

  let businessContact : ContactInfo = {
    email = "thebatterywarehouseghy@gmail.com";
    phone = "+91 70798 60205";
    name = "Raza";
    address = "Santi Path, AK Deb Road, Katabari, Guwahati, Assam 781035";
  };

  public query ({ caller }) func getContactInfo() : async ContactInfo {
    businessContact;
  };

  public shared ({ caller }) func submitInquiry(_inquiry : Inquiry) : async () {
    // No need to store inquiries to ensure privacy.
    ();
  };
};
