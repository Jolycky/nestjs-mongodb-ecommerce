import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Item } from '../../item/schemas/item.schema';
import { Customer } from '../../customer/schemas/customer.schema';

@Schema()
export class Order extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Customer', required: true })
  customer: Customer;

  @Prop([{ type: Types.ObjectId, ref: 'Item', required: true }])
  items: Item[];

  @Prop({ required: true })
  totalAmount: number;

  @Prop({ required: true, default: Date.now })
  orderDate: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
