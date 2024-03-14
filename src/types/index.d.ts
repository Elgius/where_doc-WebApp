export interface DoctorData {
  id: bigint; // Use bigint for large integer IDs
  name: string;
  department: string;
  joined?: Date; // Use Date for representing dates
  license?: string;
  designation?: string;
  img?: string; // Assuming URL for doctor's image
  url?: string; // Assuming URL for some doctor-related information
  duty?: string;
}
