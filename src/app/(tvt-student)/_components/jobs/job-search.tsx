"use client";

import { useState } from "react";
import { Card, CardContent } from "@/app/(tvt-student)/_components/ui/card";
import { Input } from "@/app/(tvt-student)/_components/ui/input";
import { Button } from "@/app/(tvt-student)/_components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/(tvt-student)/_components/ui/select";
import { Badge } from "@/app/(tvt-student)/_components/ui/badge";
import { Search, MapPin, Filter, X } from "lucide-react";

export function JobSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [skillFilter, setSkillFilter] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleAddFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const handleRemoveFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  const suggestedSkills = [
    "Arc Welding",
    "Safety Protocols",
    "Metal Preparation",
    "Quality Control",
  ];

  return (
    <Card className="border border-white/10 bg-white/5 ">
      <CardContent className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-white"
            />
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10 text-white"
            />
          </div>

          <Select value={jobType} onValueChange={setJobType}>
            <SelectTrigger>
              <SelectValue className="text-white" placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent style={{ color: "white" }} className="text-white">
              <SelectItem value="full-time">Full Time</SelectItem>
              <SelectItem value="part-time">Part Time</SelectItem>
              <SelectItem value="internship">Internship</SelectItem>
              <SelectItem value="apprenticeship">Apprenticeship</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
            </SelectContent>
          </Select>

          <Select value={skillFilter} onValueChange={setSkillFilter}>
            <SelectTrigger>
              <SelectValue
                className="text-white"
                placeholder="Required Skills"
              />
            </SelectTrigger>
            <SelectContent className="text-white">
              {suggestedSkills.map((skill) => (
                <SelectItem className="text-white" key={skill} value={skill}>
                  {skill}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter) => (
              <Badge
                key={filter}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {filter}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 hover:bg-transparent"
                  onClick={() => handleRemoveFilter(filter)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>

          <div className="flex gap-2">
            {/* <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button> */}
            <Button variant={"secondary"} size="sm">
              Search Jobs
            </Button>
          </div>
        </div>

        {/* <div className="flex flex-wrap gap-2">
          <span className="text-sm text-muted-foreground">
            Suggested skills:
          </span>
          {suggestedSkills.map((skill) => (
            <Button
              key={skill}
              variant="outline"
              size="sm"
              className="h-6 text-xs bg-transparent"
              onClick={() => handleAddFilter(skill)}
            >
              + {skill}
            </Button>
          ))}
        </div> */}
      </CardContent>
    </Card>
  );
}
