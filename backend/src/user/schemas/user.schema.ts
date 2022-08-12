import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from '../../auth/enums/role.enum';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop({ required: true })
    email: string;

    @Prop()
    dateOfBirth: Date;

    @Prop()
    mobile: number;

    @Prop({ required: true })
    status: boolean;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    accountType: Role[];

}

export const UserSchema = SchemaFactory.createForClass(User);