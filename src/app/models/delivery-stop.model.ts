export interface DeliveryStop {
  id: number;
  driverName: string;
  deliveryAddress1: string;
  deliveryAddress2: string;
  deliveryAddress3: string;
  //customerPhone: string;
  plannedArrivalTime: string;
  actualArrivalTime: string | null;
  priority: number;
  plannedTravelTime: string | null;
}