"use client";

import { useState } from "react";
import { Card, CardContent } from "@/app/(tvt-student)/_components/ui/card";
import { Button } from "@/app/(tvt-student)/_components/ui/button";
import { Badge } from "@/app/(tvt-student)/_components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/(tvt-student)/_components/ui/select";
import { Filter, X } from "lucide-react";

export function StoriesFilter() {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedCareerLevel, setSelectedCareerLevel] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const programs = [
    "Welding Technology",
    "Automotive Technology",
    "Electrical Installation",
    "Plumbing & Pipefitting",
    "Carpentry & Joinery",
    "Hospitality Management",
    "Culinary Arts",
    "Information Technology",
  ];

  const industries = [
    "Manufacturing",
    "Construction",
    "Aerospace",
    "Automotive",
    "Energy",
    "Hospitality",
    "Technology",
    "Healthcare",
  ];

  const careerLevels = [
    "Entry Level",
    "Mid-Level",
    "Senior Level",
    "Management",
    "Executive",
    "Entrepreneur",
  ];

  const handleAddFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const handleRemoveFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    setSelectedProgram("");
    setSelectedIndustry("");
    setSelectedCareerLevel("");
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Filter Stories</h3>
          {activeFilters.length > 0 && (
            <Button variant="outline" size="sm" onClick={clearAllFilters}>
              Clear All
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select value={selectedProgram} onValueChange={setSelectedProgram}>
            <SelectTrigger>
              <SelectValue placeholder="TVET Program" />
            </SelectTrigger>
            <SelectContent>
              {programs.map((program) => (
                <SelectItem key={program} value={program}>
                  {program}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
            <SelectTrigger>
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={selectedCareerLevel}
            onValueChange={setSelectedCareerLevel}
          >
            <SelectTrigger>
              <SelectValue placeholder="Career Level" />
            </SelectTrigger>
            <SelectContent>
              {careerLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {activeFilters.length > 0 && (
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
        )}

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing stories from graduates in your field and related industries
          </p>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
