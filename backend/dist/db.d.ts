import mongoose, { Types } from "mongoose";
export declare const employeeModel: mongoose.Model<{
    name: string;
    password: string;
    createdAt: NativeDate;
    email?: string | null;
    phoneNumber?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    password: string;
    createdAt: NativeDate;
    email?: string | null;
    phoneNumber?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    password: string;
    createdAt: NativeDate;
    email?: string | null;
    phoneNumber?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    password: string;
    createdAt: NativeDate;
    email?: string | null;
    phoneNumber?: string | null;
}, mongoose.Document<unknown, {}, {
    name: string;
    password: string;
    createdAt: NativeDate;
    email?: string | null;
    phoneNumber?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    password: string;
    createdAt: NativeDate;
    email?: string | null;
    phoneNumber?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        name: string;
        password: string;
        createdAt: NativeDate;
        email?: string | null;
        phoneNumber?: string | null;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        name: string;
        password: string;
        createdAt: NativeDate;
        email?: string | null;
        phoneNumber?: string | null;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    name: string;
    password: string;
    createdAt: NativeDate;
    email?: string | null;
    phoneNumber?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    password: string;
    createdAt: NativeDate;
    email?: string | null;
    phoneNumber?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const employerModel: mongoose.Model<{
    name: string;
    password: string;
    createdAt: NativeDate;
    companyName: string;
    email?: string | null;
    phoneNumber?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    password: string;
    createdAt: NativeDate;
    companyName: string;
    email?: string | null;
    phoneNumber?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    password: string;
    createdAt: NativeDate;
    companyName: string;
    email?: string | null;
    phoneNumber?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    password: string;
    createdAt: NativeDate;
    companyName: string;
    email?: string | null;
    phoneNumber?: string | null;
}, mongoose.Document<unknown, {}, {
    name: string;
    password: string;
    createdAt: NativeDate;
    companyName: string;
    email?: string | null;
    phoneNumber?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    password: string;
    createdAt: NativeDate;
    companyName: string;
    email?: string | null;
    phoneNumber?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        name: string;
        password: string;
        createdAt: NativeDate;
        companyName: string;
        email?: string | null;
        phoneNumber?: string | null;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        name: string;
        password: string;
        createdAt: NativeDate;
        companyName: string;
        email?: string | null;
        phoneNumber?: string | null;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    name: string;
    password: string;
    createdAt: NativeDate;
    companyName: string;
    email?: string | null;
    phoneNumber?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    password: string;
    createdAt: NativeDate;
    companyName: string;
    email?: string | null;
    phoneNumber?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const adminModel: mongoose.Model<{
    email: string;
    password: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    email: string;
    password: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    email: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email: string;
    password: string;
}, mongoose.Document<unknown, {}, {
    email: string;
    password: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    email: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        email: string;
        password: string;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        email: string;
        password: string;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    email: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    email: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const jobModel: mongoose.Model<{
    createdAt: NativeDate;
    description: string;
    title: string;
    employerId: Types.ObjectId;
    location?: string | null;
    salary?: number | null;
    industry?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    description: string;
    title: string;
    employerId: Types.ObjectId;
    location?: string | null;
    salary?: number | null;
    industry?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    description: string;
    title: string;
    employerId: Types.ObjectId;
    location?: string | null;
    salary?: number | null;
    industry?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    description: string;
    title: string;
    employerId: Types.ObjectId;
    location?: string | null;
    salary?: number | null;
    industry?: string | null;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    description: string;
    title: string;
    employerId: Types.ObjectId;
    location?: string | null;
    salary?: number | null;
    industry?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    description: string;
    title: string;
    employerId: Types.ObjectId;
    location?: string | null;
    salary?: number | null;
    industry?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        createdAt: NativeDate;
        description: string;
        title: string;
        employerId: Types.ObjectId;
        location?: string | null;
        salary?: number | null;
        industry?: string | null;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        createdAt: NativeDate;
        description: string;
        title: string;
        employerId: Types.ObjectId;
        location?: string | null;
        salary?: number | null;
        industry?: string | null;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    createdAt: NativeDate;
    description: string;
    title: string;
    employerId: Types.ObjectId;
    location?: string | null;
    salary?: number | null;
    industry?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: NativeDate;
    description: string;
    title: string;
    employerId: Types.ObjectId;
    location?: string | null;
    salary?: number | null;
    industry?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const applicationModel: mongoose.Model<{
    employeeId: Types.ObjectId;
    jobId: Types.ObjectId;
    status: string;
    appliedAt: NativeDate;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    employeeId: Types.ObjectId;
    jobId: Types.ObjectId;
    status: string;
    appliedAt: NativeDate;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    employeeId: Types.ObjectId;
    jobId: Types.ObjectId;
    status: string;
    appliedAt: NativeDate;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    employeeId: Types.ObjectId;
    jobId: Types.ObjectId;
    status: string;
    appliedAt: NativeDate;
}, mongoose.Document<unknown, {}, {
    employeeId: Types.ObjectId;
    jobId: Types.ObjectId;
    status: string;
    appliedAt: NativeDate;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    employeeId: Types.ObjectId;
    jobId: Types.ObjectId;
    status: string;
    appliedAt: NativeDate;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        employeeId: Types.ObjectId;
        jobId: Types.ObjectId;
        status: string;
        appliedAt: NativeDate;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        employeeId: Types.ObjectId;
        jobId: Types.ObjectId;
        status: string;
        appliedAt: NativeDate;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    employeeId: Types.ObjectId;
    jobId: Types.ObjectId;
    status: string;
    appliedAt: NativeDate;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    employeeId: Types.ObjectId;
    jobId: Types.ObjectId;
    status: string;
    appliedAt: NativeDate;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map