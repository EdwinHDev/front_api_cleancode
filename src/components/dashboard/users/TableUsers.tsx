"use client"

import { IUser } from "@/types/user"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, Button, Avatar, Chip } from "@nextui-org/react"
import { HTMLAttributes, useEffect, useState } from "react"
import UserService from "@/services/users"
import { CircleCheck, CircleClose, Delete, Edit } from "@/components/ui/icons"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const TableUsers = ({ className }: Props) => {


  const [users, setUsers] = useState<IUser[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await UserService.getUsers()
        setUsers(users)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }
    fetchUsers()
  }, [])

  console.log(users)

  return (
    <Table
      className={className}
      aria-label="Example static collection table"
      selectionMode="single"
    >
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>ACTIONS</TableColumn>
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        loadingContent={<Spinner />}
        emptyContent={<p>No users found</p>}
        items={users}
      >
        {(user) => (
          <TableRow
            key={user.id}
          >
            <TableCell>
              <div className="flex gap-3">
                <Avatar
                  isBordered
                  radius="lg"
                  src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                />
                <div>
                  <p className="font-semibold capitalize">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Chip className="capitalize">{user.role}</Chip>
            </TableCell>
            <TableCell>
              {
                user.status === "active"
                  ? <Chip startContent={<CircleCheck className="w-[18px] h-[18px]" />} variant="faded" color="success">{user.status}</Chip>
                  : <Chip startContent={<CircleClose className="w-[18px] h-[18px]" />} variant="bordered" color="danger">{user.status}</Chip>
              }
            </TableCell>
            <TableCell className="flex gap-2">
              <Button
                color="primary"
                isIconOnly
                aria-label="Edit"
              >
                <Edit className="w-5 h-5" />
              </Button>
              <Button
                color="danger"
                isIconOnly
                aria-label="Delete"
              >
                <Delete className="w-5 h-5" />
              </Button>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
