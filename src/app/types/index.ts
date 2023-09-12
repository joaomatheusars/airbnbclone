import { Listing, User, Reservation } from "@prisma/client";
import { type } from "os";

export type SafeListing = Omit<
    Listing,
    "createdAt"
> & {
    createdAt: string
}

export type SafeReservation = Omit<
    Reservation,
    "createdAt" | "startDate" | "endDate" | "listing"
> & {
    createdAt: string;
    startDate: string;
    endDate: string;
    listing:SafeListing;
}

export type SafeUser = Omit <
    User,
    "createdAt" | "updateAt" | "emailVerified"
> & {
    createdAt: string;
    updateAt: string;
    emailVerified: string | null

}