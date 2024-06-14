"use client";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

export default function ContactApp() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="bg-[#27272C] w-full lg:w-[65%] p-5 lg:p-10 rounded-md order-2 lg:order-none">
        <h2 className="text-accent text-xl lg:text-3xl">{`Let's`} work together</h2>
        <span className="text-white/70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          consequatur quas maiores. Numquam qui voluptatem molestiae optio id,
          dignissimos, unde eveniet neque accusantium. lorem
        </span>
        <div className="">
          <form action="" className="flex flex-col gap-5">
            <div className="flex gap-[5%] gap-y-5 flex-wrap">
              <Input
                className="w-full lg:w-[47.5%]"
                type="firstname"
                placeholder="Firstname"
              />
              <Input
                className="w-full lg:w-[47.5%]"
                type="firstname"
                placeholder="Firstname"
              />
              <Input
                className="w-full lg:w-[47.5%]"
                type="firstname"
                placeholder="Firstname"
              />
              <Input
                className="w-full lg:w-[47.5%]"
                type="firstname"
                placeholder="Firstname"
              />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a service"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="est">Web Development</SelectItem>
                  <SelectItem value="cst">Ui/Ux Desiign</SelectItem>
                  <SelectItem value="cst">Ui/Ux Desiign</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Textarea placeholder="Type your message here" />
            <Button
              size="default"
              className="max-w-40 bg-accent rounded-3xl text-primary px-6 hover:bg-accent-hover transition-colors"
            >
              Send message
            </Button>
          </form>
        </div>
      </div>
      <div className="my-auto flex flex-col gap-8">
        <div className="flex gap-5">
          <div
            className="text-accent text-xl lg:text-2xl flex justify-center 
            items-center h-12 w-12
            lg:w-16 lg:h-16 bg-[#27272c] lg:rounded-md"
          >
            <FaPhoneAlt />
          </div>
          <div className="flex flex-col justify-center">
            <small className="text-white/70">Phone</small>
            <span>(+55) 1194866-0920</span>
          </div>
        </div>
        <div className="flex gap-5">
          <div
            className="text-accent text-xl lg:text-2xl flex justify-center 
            items-center h-12 w-12
            lg:w-16 lg:h-16 bg-[#27272c] lg:rounded-md"
          >
            <FaEnvelope />
          </div>
          <div className="flex flex-col justify-center">
            <small className="text-white/70">Email</small>
            <span>(+55) 1194866-0920</span>
          </div>
        </div>
        <div className="flex gap-5">
          <div
            className="text-accent text-xl lg:text-2xl flex justify-center 
            items-center h-12 w-12
            lg:w-16 lg:h-16 bg-[#27272c] lg:rounded-md"
          >
            <FaMapMarkerAlt />
          </div>
          <div className="flex flex-col justify-center">
            <small className="text-white/70">Address</small>
            <span>(+55) 1194866-0920</span>
          </div>
        </div>
      </div>
    </div>
  );
}
