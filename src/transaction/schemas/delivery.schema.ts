import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Order } from './order.schema';

@Schema()
export class Delivery extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Order', required: true })
  order: Order;

  @Prop({ required: true })
  deliveryStatus: string; // e.g., 'Shipped', 'Delivered', etc.

  @Prop({ required: true })
  deliveryAddress: string;

  @Prop({ required: true, default: Date.now })
  deliveryDate: Date;
}

export const DeliverySchema = SchemaFactory.createForClass(Delivery);
