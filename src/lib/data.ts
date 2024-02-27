// this file contains a sample on how we expect the data flow to be


type Doctor = {
  name: String;
  field: String;
  clinic: String;
  address?: String;
//   shift: String;
//   room: String;
};

type Doctors = Doctor[];

export const avalableDoctors : Doctors = [
        {
          name: "Dr. John Doe",
          field: "Cardiology",
          clinic: "Heartland Clinic",
          address: "123 Main St, Heartland, USA",
        },
        {
          name: "Dr. Jane Smith",
          field: "Neurology",
          clinic: "Mind Center",
          address: "456 Elm St, Neuron City, USA"
        },
        {
          name: "Dr. Richard Roe",
          field: "Orthopedics",
          clinic: "Bone Joint Clinic",
          address: "789 Oak St, Jointville, USA"
        },
        {
          name: "Dr. Mary Major",
          field: "Dermatology",
          clinic: "Skin Care Center",
          address: "321 Pine St, Skinville, USA"
        }
      ]