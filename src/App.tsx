/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, MoreVertical, Check, ChevronLeft } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center font-sans">
      <div className="w-full max-w-md bg-white min-h-screen shadow-sm flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-white sticky top-0 z-50">
          <X className="w-6 h-6 text-gray-900 stroke-[1.5]" />
          <h1 className="text-lg font-bold text-gray-900">请假</h1>
          <MoreVertical className="w-6 h-6 text-gray-900 stroke-[1.5]" />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto pb-8">
          {/* Details List */}
          <div className="px-5 py-2 space-y-3.5 text-[15px]">
            <div className="flex">
              <span className="text-gray-400 w-28 shrink-0 tracking-wide">请假类型</span>
              <span className="text-gray-900 font-normal">学生校内请假（不可出校）</span>
            </div>
            <div className="flex">
              <span className="text-gray-400 w-28 shrink-0 tracking-wide">请假性质</span>
              <span className="text-gray-900 font-normal">因私请假</span>
            </div>
            <div className="flex">
              <span className="text-gray-400 w-28 shrink-0 tracking-wide">是否离青</span>
              <span className="text-gray-900 font-normal"></span>
            </div>
            <div className="flex">
              <span className="text-gray-400 w-28 shrink-0 tracking-wide">请假日期</span>
              <span className="text-gray-900 font-normal">2026-03-02 18:50 至 2026-03-02 20:50</span>
            </div>
            <div className="flex">
              <span className="text-gray-400 w-28 shrink-0 tracking-wide">请假天数</span>
              <span className="text-gray-900 font-normal">0.08</span>
            </div>
            <div className="flex">
              <span className="text-gray-400 w-28 shrink-0 tracking-wide">请假事由</span>
              <span className="text-gray-900 font-normal">头疼</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400 tracking-wide">证明材料 (0/9)</span>
              <div className="flex space-x-2">
                 <span className="text-gray-400 text-sm">暂无数据</span>
              </div>
            </div>
            <div className="flex">
              <span className="text-gray-400 w-28 shrink-0 tracking-wide">手机号</span>
              <span className="text-gray-900 font-normal">13153992362</span>
            </div>
            <div className="flex">
              <span className="text-gray-400 w-28 shrink-0 tracking-wide">姓名</span>
              <span className="text-gray-900 font-normal">李振乾</span>
            </div>
            <div className="flex">
              <span className="text-gray-400 w-28 shrink-0 tracking-wide">学号</span>
              <span className="text-gray-900 font-normal">251031090220</span>
            </div>
            <div className="flex">
              <span className="text-gray-400 w-28 shrink-0 tracking-wide">院系</span>
              <span className="text-gray-900 font-normal">信息工程学院</span>
            </div>
            <div className="flex">
              <span className="text-gray-400 w-28 shrink-0 tracking-wide">年级</span>
              <span className="text-gray-900 font-normal">2025</span>
            </div>
            <div className="flex">
              <span className="text-gray-400 w-28 shrink-0 tracking-wide">班级</span>
              <span className="text-gray-900 font-normal">25级虚拟现实技术应用2班</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-2 bg-gray-50 border-t border-gray-100 mt-4 mb-4"></div>

          {/* Approval Process */}
          <div className="px-5">
            <h2 className="text-[16px] font-medium text-gray-900 mb-6">审核流程</h2>
            
            <div className="relative">
              {/* Vertical Line Background */}
              <div className="absolute left-[7.5rem] top-3 bottom-6 w-[1px] bg-gray-200"></div>

              {/* Step 1 */}
              <div className="flex mb-8 relative">
                <div className="w-24 text-right text-xs text-gray-300 pr-6 pt-1 leading-tight shrink-0">
                  <div>2026-03-02</div>
                  <div className="mt-1">16:50</div>
                </div>
                <div className="relative z-10 flex flex-col items-center mr-4 shrink-0 w-6">
                  <div className="w-6 h-6 rounded-full bg-[#4DB6AC] flex items-center justify-center shadow-sm">
                    <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                  </div>
                </div>
                <div className="pt-0.5 text-[15px] text-gray-400">提交申请</div>
              </div>

              {/* Step 2 */}
              <div className="flex mb-8 relative">
                <div className="w-24 text-right text-xs text-gray-300 pr-6 pt-1 leading-tight shrink-0">
                  <div>2026-03-02</div>
                  <div className="mt-1">11:15:37</div>
                </div>
                <div className="relative z-10 flex flex-col items-center mr-4 shrink-0 w-6">
                  <div className="w-6 h-6 rounded-full bg-[#4DB6AC] flex items-center justify-center shadow-sm">
                    <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                  </div>
                </div>
                <div className="pt-0.5 text-[15px] text-gray-400 space-y-1">
                  <div className="text-gray-400">辅导员审核</div>
                  <div className="text-gray-400">通过</div>
                  <div className="text-gray-400">审核人：王霄</div>
                  <div className="text-gray-400">审核意见：同意</div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex relative">
                <div className="w-24 text-right text-xs text-gray-300 pr-6 pt-1 leading-tight shrink-0">
                  {/* Empty date for last step */}
                </div>
                <div className="relative z-10 flex flex-col items-center mr-4 shrink-0 w-6">
                  <div className="w-6 h-6 rounded-full bg-[#4DB6AC] flex items-center justify-center shadow-sm">
                    <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                  </div>
                </div>
                <div className="pt-0.5 text-[15px] text-gray-400">结束</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

