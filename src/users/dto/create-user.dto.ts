import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsEnum, IsNotEmpty, IsDateString, IsOptional } from 'class-validator';
import { MembershipType } from '../enums/membership-type.enum';
import { Status } from '../enums/status.enum';

export class CreateUserDto {
  @ApiProperty({ example: 'Ahmet Yılmaz' })
  @IsString()
  @IsNotEmpty({ message: 'İsim alanı boş bırakılamaz' })
  name!: string;

  @ApiProperty({ example: 'ahmet@example.com' })
  @IsEmail({}, { message: 'Geçerli bir e-posta adresi giriniz' })
  email!: string;

  @ApiProperty({ enum: MembershipType, example: MembershipType.VIP })
  @IsEnum(MembershipType, { message: 'Geçerli bir üyelik tipi seçiniz (Aylık, Yıllık, VIP)' })
  membershipType!: MembershipType;

  @ApiProperty({ enum: Status, example: Status.ACTIVE })
  @IsEnum(Status, { message: 'Geçerli bir durum seçiniz (Aktif, Pasif, Dondurulmuş)' })
  status!: Status;

  @ApiProperty({ example: '2026-12-31T23:59:59Z', required: false })
  @IsOptional()
  @IsDateString({}, { message: 'Geçerli bir ISO 8601 tarih formatı giriniz' })
  subscriptionEndDate?: string;
}
