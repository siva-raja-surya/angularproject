import { Component, OnInit } from '@angular/core';
import { Room, RoomsList } from './room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Surya';
  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList : RoomsList[] = [
    {
      roomNumber: 1,
    roomTypes : 'Deluxe Room',
    amenities: 'Air Conditioner , Free Wi-Fi , TV, Bathroom',
    price: 500,
    photos: 'https://pixabay.com/photos/interior-design-modern-style-home-4467768/',
    checkinTime: new Date('11-Nov-2023'),
    checkoutTime: new Date('12-Nov-2023'),
  },
  {
    roomNumber: 2,
    roomTypes : 'Deluxe Room',
    amenities: 'Air Conditioner , Free Wi-Fi ,  Bathroom',
    price: 1000,
    photos: 'https://img.freepik.com/free-photo/armchair-green-living-room-with-copy-space_43614-910.jpg?w=1380&t=st=1693795654~exp=1693796254~hmac=ac149824d2d7c8eb7c01fd245ab3824cbb10fd73c445f991b17cbd625ffb51ed',
    checkinTime: new Date('11-Nov-2023'),
    checkoutTime: new Date('12-Nov-2023'),
  },
  {
    roomNumber: 1,
    roomTypes : 'Deluxe Room',
    amenities: 'Air Conditioner , Free Wi-Fi ,  Bathroom',
    price: 1500,
    photos: 'https://img.freepik.com/free-vector/artist-studio-night-cartoon-illustration_107791-5974.jpg?w=1380&t=st=1693795688~exp=1693796288~hmac=c48ffa7dcbb28719f230fda8ed71e97a41d8b3928db6636501e0344b8e94ce20',
    checkinTime: new Date('11-Nov-2023'),
    checkoutTime: new Date('12-Nov-2023'),
  },
]

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
