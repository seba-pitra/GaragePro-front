import type { User } from './user.interface';

export interface Reservation {
  durationInMinutes: number;
  entryTime: Date;
  exitTime: Date;
  basicCost: number;
  user: User;
  actualEntryTime: null;
  actualExitTime: null;
  penalty: null;
  totalCost: null;
  isPaid: null;
  booking_date: Date;
  id: string;
  status: string;
  createdAt: Date;
}

export interface ReserveDto {
  entryTime: Date;
  exitTime: Date;
  slotCode: string;
}

export interface ReservationData {
  reservation: ReservationFromBack;
  parking_slot: ParkingSlot;
  id: string;
  created_at: Date;
}

export interface ParkingSlot {
  id: string;
  slot_code: string;
  created_at: Date;
}

export interface ReservationFromBack {
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
