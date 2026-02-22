import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Ahmet Yılmaz', description: 'Üyenin tam adı' })
  name: string;

  @ApiProperty({ example: 'ahmet@example.com', description: 'Üyenin e-posta adresi' })
  email: string;

  @ApiProperty({ example: 'VIP', description: 'Abonelik tipi (Aylık, Yıllık, VIP vb.)' })
  membershipType: string;

  @ApiProperty({ example: 'Aktif', description: 'Üyelik durumu (Aktif, Pasif, Dondurulmuş)' })
  status: string;

  @ApiProperty({ example: '2026-12-31T23:59:59Z', description: 'Abonelik bitiş tarihi' })
  subscriptionEndDate: Date;
}