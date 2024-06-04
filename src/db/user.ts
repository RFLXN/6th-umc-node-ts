import { User, UserGender } from "../models/entities/user";
import {
    INSERT_USER,
    INSERT_USER_WITH_GENDER,
    SELECT_IS_EXIST_EMAIL,
    SELECT_USER_BY_EMAIL,
    SELECT_USER_BY_ID
} from "../models/sql/user";
import { getPool } from "../configs/db.pool";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { status } from "../configs/response.status";
import { ApiError } from "../configs/error";

/**
 * 유저를 DB에 추가
 * @param user 유저 정보
 * @returns 추가한 유저의 ID
 */
export async function insertUser(user: Omit<User, "id">): Promise<number> {
    try {
        const connection = await getPool().getConnection();

        const [ emailResult ] = await connection.query<RowDataPacket[]>(SELECT_IS_EXIST_EMAIL, user.email);
        const isEmailExist = emailResult[0].IS_EXIST_EMAIL;
        if (isEmailExist) {
            connection.release();
            return -1;
        }

        // gender가 null이 아닌 경우 INSERT_USER를 이용하고 없는경우에는 INSERT_USER_WITH_GENDER를 이용
        const [ result ] = user.gender
            ? await connection.query<ResultSetHeader>(INSERT_USER_WITH_GENDER, [
                user.email, user.password, user.username, user.gender
            ])
            : await connection.query<ResultSetHeader>(INSERT_USER, [
                user.email, user.password, user.username
            ]);

        connection.release();

        return result.insertId;
    } catch (e) {
        throw new ApiError(status.PARAMETER_IS_WRONG);
    }
}

/**
 * ID로 유저 조회
 * @param id 유저 ID
 * @returns 유저 정보
 */
export async function getUserById(id: number): Promise<User | undefined> {
    try {
        const connection = await getPool().getConnection();

        const [ result ] = await connection.query<RowDataPacket[]>(SELECT_USER_BY_ID, id);

        if (result.length < 1) {
            connection.release();
            return;
        }

        const rawUser = result[0] as {
            ID: number, EMAIL: string, PASSWORD: string, USERNAME: string, GENDER?: UserGender
        };

        connection.release();

        return {
            id: rawUser.ID,
            email: rawUser.EMAIL,
            password: rawUser.PASSWORD,
            username: rawUser.USERNAME,
            gender: rawUser?.GENDER
        } as User;
    } catch (e) {
        throw new ApiError(status.PARAMETER_IS_WRONG);
    }
}

/**
 * 이메일로 유저 조회
 * @param email 유저 이메일 주소
 * @returns 유저 정보
 */
export async function getUserByEmail(email: string): Promise<User | undefined> {
    try {
        const connection = await getPool().getConnection();

        const [ result ] = await connection.query<RowDataPacket[]>(SELECT_USER_BY_EMAIL, email);

        if (result.length < 1) {
            connection.release();
            return;
        }

        const rawUser = result[0] as {
            ID: number, EMAIL: string, PASSWORD: string, USERNAME: string, GENDER?: UserGender
        };

        connection.release();

        return {
            id: rawUser.ID,
            email: rawUser.EMAIL,
            password: rawUser.PASSWORD,
            username: rawUser.USERNAME,
            gender: rawUser?.GENDER
        } as User;
    } catch (e) {
        throw new ApiError(status.PARAMETER_IS_WRONG);
    }
}
