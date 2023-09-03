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
    roomTypes : 'Deluxe Room',
    amenities: 'Air Conditioner , Free Wi-Fi , TV, Bathroom',
    price: 500,
    photos: 'https://pixabay.com/photos/interior-design-modern-style-home-4467768/',
    checkinTime: new Date('11-Nov-2023'),
    checkoutTime: new Date('12-Nov-2023'),
  },
  {
    roomTypes : 'Deluxe Room',
    amenities: 'Air Conditioner , Free Wi-Fi ,  Bathroom',
    price: 1000,
    photos: 'https://pixabay.com/photos/interior-design-modern-style-home-4467768/',
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
