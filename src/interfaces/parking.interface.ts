export interface ReserveDto {
  durationInMinutes: string;
  entryTime: Date;
  exitTime: Date;
  slotCode: string;
  basicCost: string;
}

export interface ResponseCreateReservation {
  ok: boolean;
  timestamps: Date;
  data: ReservationData;
}

export interface ReservationData {
  reservation: Reservation;
  parking_slot: ParkingSlot;
  id: string;
  created_at: Date;
}

export interface ParkingSlot {
  id: string;
  slot_code: string;
  created_at: Date;
}

export interface Reservation {
  duration_in_minutes: number;
  entry_time: Date;
  exit_time: Date;
  basic_cost: number;
  user: User;
  actual_entry_time: null;
  actual_exit_time: null;
  penalty: null;
  total_cost: null;
  is_paid: null;
  booking_date: Date;
  id: string;
  status: string;
  created_at: Date;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  roles: string[];
  is_active: boolean;
  is_regular_customer: boolean;
  phone: string;
  created_at: Date;
}
