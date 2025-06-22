export interface Vehicle {
  plateNumber: string;
  model: string;
  color: string;
  isActive?: boolean;
}

export interface VehicleApi {
  plate_number: string;
  model: string;
  color: string;
  is_active: boolean;
}

export interface VehicleResponseApi {
  vehicles: VehicleApi[];
}
