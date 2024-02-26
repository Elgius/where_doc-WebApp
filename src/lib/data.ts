// this file contains a sample on how we expect the data flow to be


type Doctor = {
  name: String;
  field: String;
  clinic: String;
  address?: String;
  shift: String;
  room: String;
};

type Doctors = Doctor[];

export const avalableDoctors : Doctors = [
    {
        name: "Top G",
        field: "Sigma somshit",
        clinic: "Real World",
        address: "Romania",
        shift: "-",
        room: "-",
    },
    {
        name: "Bend Over",
        field: "SuS",
        clinic: "you dont need to know",
        address: "sus place",
        shift: "1900-2200",
        room: "-",
    },
]