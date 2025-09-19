import { User } from "@prisma/client";
import z from "zod";
import { usersFoundInSearch } from "../schema-zod";

export type UserData = Pick<User, 'name' | 'email'>

export type UsersFoundInSearch = z.infer<typeof usersFoundInSearch>
