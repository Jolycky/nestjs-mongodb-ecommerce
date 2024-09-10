import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Order } from './order.schema';

@Schema()
export class Payment extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Order', required: true })
  order: Order;

  @Prop({ required: true })
  paymentMethod: string; // e.g., 'Credit Card', 'PayPal', etc.

  @Prop({ required: true })
  paymentStatus: string; // e.g., 'Pending', 'Completed', etc.

  @Prop({ required: true, default: Date.now })
  paymentDate: Date;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
