"use client"

import { useState } from "react"
import { ChevronDown, X, History, Save, ThumbsUp, ThumbsDown, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function PromptTestingInterface() {
  const [messages, setMessages] = useState([
    { role: "user", content: "hi" },
    { role: "assistant", content: "Hello! How can I assist you today?" },
  ])

  return (
    <div className="flex flex-col min-h-screen bg-neutral-100">
      <div className="container mx-auto p-4 flex-1 flex flex-col md:px-20 lg:px-28 xl:px-32">  
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-medium">Prompts</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <History className="h-4 w-4" />
              <span className="hidden sm:inline">History</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <span>Responses API</span>
            </Button>
          </div>
        </div>
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 mb-3 h-1/2 overflow-y-auto">
          {/* Model A */}
          <div className="bg-white rounded-lg shadow flex flex-col">
            <div className="p-3 border-b">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                    A
                  </Badge>
                  <span className="font-medium">gpt-4o</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Save className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-3 border-b">
              <div className="text-sm text-gray-500 mb-1">System message</div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-400 truncate">
                  Describe desired model behavior (tone, tool usage, response style)
                </div>
                <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0 ml-2" />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="p-3 border-b">
                <div className="text-sm text-gray-500 mb-2">User</div>
                <div className="text-sm">hi</div>
              </div>

              <div className="p-3 border-b">
                <div className="text-sm text-gray-500 mb-2">Assistant</div>
                <div className="text-sm">Hello! How can I assist you today? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima sapiente amet dolor similique culpa architecto eligendi, aliquid molestias officiis et quos tenetur rem dolorem tempora. Hic nisi beatae vel possimus?</div>
              </div>

              <div className="p-3 flex items-center gap-2">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  <span>Good</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <ThumbsDown className="h-4 w-4" />
                  <span>Bad</span>
                </Button>
              </div>
            </div>

            <div className="p-3 border-t flex items-center justify-between text-xs text-gray-500 mt-auto">
              <div className="flex items-center gap-2">
                <span>823ms</span>
                <span>↑ 8t</span>
                <span>↓ 18t</span>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">
                <span>Log ID</span>
              </Button>
            </div>
          </div>

          {/* Model B */}
          <div className="bg-white rounded-lg shadow flex flex-col">
            <div className="p-3 border-b">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                    B
                  </Badge>
                  <span className="font-medium">gpt-4o</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Save className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-3 border-b">
              <div className="text-sm text-gray-500 mb-1">System message</div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-400 truncate">
                  Describe desired model behavior (tone, tool usage, response style)
                </div>
                <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0 ml-2" />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="p-3 border-b">
                <div className="text-sm text-gray-500 mb-2">User</div>
                <div className="text-sm">hi</div>
              </div>

              <div className="p-3 border-b">
                <div className="text-sm text-gray-500 mb-2">Assistant</div>
                <div className="text-sm">Hello! How can I assist you today?</div>
              </div>

              <div className="p-3 flex items-center gap-2">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  <span>Good</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <ThumbsDown className="h-4 w-4" />
                  <span>Bad</span>
                </Button>
              </div>
            </div>

            <div className="p-3 border-t flex items-center justify-between text-xs text-gray-500 mt-auto">
              <div className="flex items-center gap-2">
                <span>873ms</span>
                <span>↑ 8t</span>
                <span>↓ 18t</span>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">
                <span>Log ID</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Chat input - fixed at bottom with minimal margin */}
        <div className="w-2/3 bg-white rounded-lg shadow p-3 sticky bottom-0">
          <div className="relative">
            <Textarea placeholder="Chat with your prom..." className="resize-none pr-20 " rows={1} />
            <div className="absolute bottom-2 right-2 flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Auto-clear</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Button size="sm" className="rounded-full bg-green-600 hover:bg-green-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up"
                >
                  <path d="m5 12 7-7 7 7" />
                  <path d="M12 19V5" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
