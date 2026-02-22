export class User {
  id: number;
  name: string;
  email: string;
  membershipType: string; // 'Aylık', 'Yıllık', 'VIP'
  status: string; // 'Aktif', 'Pasif', 'Dondurulmuş'
  subscriptionEndDate: Date;
}