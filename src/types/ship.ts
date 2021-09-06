export interface ShipDetail {
  id: string;
  name?: string;
  type: string;
  role?: string;
  value: number;
  currentStation: string;
}

export interface ShipIndexResponse {
  ships_here: ShipDetail[];
  ships_elsewhere: ShipDetail[];
}
