import { History } from "lucide-react"

import { models, types } from "@/data/models"
import { presets } from "@/data/presets"
import { CodeViewer } from "@/components/code-viewer"
import { Icons } from "@/components/icons"
import { MaxLengthSelector } from "@/components/maxlength-selector"
import { ModelSelector } from "@/components/model-selector"
import { PresetActions } from "@/components/preset-actions"
import { PresetSave } from "@/components/preset-save"
import { PresetSelector } from "@/components/preset-selector"
import { PresetShare } from "@/components/preset-share"
import { TemperatureSelector } from "@/components/temperature-selector"
import { TopPSelector } from "@/components/top-p-selector"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function PlaygroundPage() {
  return (
    <div className="flex h-full flex-col">
      {/* Top bar */}
      <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
        <h1 className="text-lg font-semibold">Playground</h1>
        <div className="ml-auto flex w-full space-x-2 sm:justify-end">
          <PresetSelector presets={presets} />
          <PresetSave />
          <div className="hidden space-x-2 md:flex">
            <CodeViewer />
            <PresetShare />
          </div>
          <PresetActions />
        </div>
      </div>
      <Separator />
      <Tabs defaultValue="complete" className="flex-1">
        <div className="container h-full py-6">
          <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
            <TabsContent value="complete" className="mt-0 border-0 p-0">
              <div className="flex h-full flex-col space-y-4">
                <Textarea
                  placeholder="Write a tagline for an ice cream shop"
                  className="flex-1 p-4"
                />
                <div className="flex items-center space-x-2">
                  <Button>Submit</Button>
                  <Button variant="subtle">
                    <span className="sr-only">Show history</span>
                    <History className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="insert" className="mt-0 border-0 p-0">
              <div className="grid h-full grid-cols-2 gap-6">
                <Textarea
                  placeholder="We're writing to [inset]. Congrats from OpenAI!"
                  className="h-full"
                />
                <div className="rounded-md border border-neutral-6 bg-neutral-1 dark:border-neutralDark-6 dark:bg-neutralDark-1"></div>
              </div>
            </TabsContent>
            <TabsContent value="edit" className="mt-0 border-0 p-0">
              <div className="grid h-full grid-cols-2 gap-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-1 flex-col space-y-2">
                    <Label htmlFor="input">Input</Label>
                    <Textarea
                      id="input"
                      placeholder="We is going to the market."
                      className="flex-1"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="instructions">Instructions</Label>
                    <Textarea
                      id="instructions"
                      placeholder="Fix the grammar."
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button>Submit</Button>
                    <Button variant="subtle">
                      <span className="sr-only">Show history</span>
                      <History className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="mt-[21px] rounded-md border border-slate-200 bg-slate-100"></div>
              </div>
            </TabsContent>
            <div className="hidden flex-col space-y-4 sm:flex">
              <div className="grid gap-2">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger asChild>
                    <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Mode
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[320px] text-sm" side="left">
                    Choose the interface that best suits your task. You can
                    provide: a simple prompt to complete, starting and ending
                    text to insert a completion within, or some text with
                    instructions to edit it.
                  </HoverCardContent>
                </HoverCard>
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="complete">
                    <span className="sr-only">Complete</span>
                    <Icons.completeMode className="h-5 w-5" />
                  </TabsTrigger>
                  <TabsTrigger value="insert">
                    <span className="sr-only">Insert</span>
                    <Icons.insertMode className="h-5 w-5" />
                  </TabsTrigger>
                  <TabsTrigger value="edit">
                    <span className="sr-only">Edit</span>
                    <Icons.editMode className="h-5 w-5" />
                  </TabsTrigger>
                </TabsList>
              </div>
              <ModelSelector types={types} models={models} />
              <TemperatureSelector defaultValue={[0.56]} />
              <MaxLengthSelector defaultValue={[256]} />
              <TopPSelector defaultValue={[0.9]} />
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  )
}
